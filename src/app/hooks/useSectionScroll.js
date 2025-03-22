import { useEffect, useRef } from "react";

export default function useSectionScroll() {
	const sectionsRef = useRef(null);
	const isScrollingRef = useRef(false);
	
	useEffect(() => {
		sectionsRef.current = document.querySelectorAll("section");
		
		const handleScroll = (event) => {
			if (isScrollingRef.current) return;
			isScrollingRef.current = true;
			setTimeout(() => {
				isScrollingRef.current = false;
			}, 0);
			
			const sections = sectionsRef.current;
			if (!sections) return;
			
			const currentSection = Array.from(sections).find((section) => {
				const rect = section.getBoundingClientRect();
				return rect.top >= 0 && rect.top < window.innerHeight / 2;
			});
			
			if (currentSection) {
				const nextSection =
					event.deltaY > 0 ? currentSection.nextElementSibling : currentSection.previousElementSibling;
				if (nextSection instanceof HTMLElement) {
					nextSection.scrollIntoView({ behavior: "smooth" });
				}
			}
		};
		
		window.addEventListener("wheel", handleScroll);
		return () => window.removeEventListener("wheel", handleScroll);
	}, []);
}