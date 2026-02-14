import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { useRef, useState, useEffect } from 'react';

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep UI state minimal; use refs for drag math to avoid re-render jitter on desktop.
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => scrollContainer.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const isPointerDownRef = useRef(false);
  const activePointerIdRef = useRef<number | null>(null);
  const hasCapturedRef = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    // Only left-click / primary pointer
    if (e.button !== 0) return;

    // If the user presses on an interactive element (like the case-study link),
    // don't start a drag session. Otherwise pointer-capture can swallow the click.
    const target = e.target as HTMLElement;
    if (target?.closest('a,button')) return;

    isPointerDownRef.current = true;
    activePointerIdRef.current = e.pointerId;
    hasCapturedRef.current = false;

    hasDraggedRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartScrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current || !scrollRef.current) return;

    const delta = e.clientX - dragStartXRef.current;

    // threshold to distinguish click vs drag
    if (!hasDraggedRef.current && Math.abs(delta) > 6) {
      hasDraggedRef.current = true;
      setIsDragging(true);

      // Capture only once we know it's an actual drag.
      if (!hasCapturedRef.current) {
        hasCapturedRef.current = true;
        try {
          (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
        } catch {
          // ignore
        }
      }
    }

    if (hasDraggedRef.current) {
      scrollRef.current.scrollLeft = dragStartScrollLeftRef.current - delta;
    }
  };

  const endDrag = (e?: React.PointerEvent) => {
    isPointerDownRef.current = false;

    if (e && hasCapturedRef.current) {
      try {
        (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }

    setIsDragging(false);
    hasCapturedRef.current = false;
    activePointerIdRef.current = null;

    // Reset after click has had a chance to fire (prevents link-blocking).
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 0);
  };


  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-transparent relative z-20">
      {/* Section Header */}
      <div className="container px-6 mb-6 md:mb-12">
        <h2 className="text-3xl md:text-6xl font-bold font-space text-white mb-2 tracking-tight">
          Case <span className="text-wrlds-blue">Studies</span>
        </h2>
        <div className="flex items-center justify-between">
          <p className="text-wrlds-muted text-sm md:text-lg">
            Explore our deployed solutions
          </p>
          <div className="flex items-center gap-4">
            {/* Navigation Arrows - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all ${
                  canScrollLeft ? 'hover:bg-white/10 text-white' : 'text-white/30 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all ${
                  canScrollRight ? 'hover:bg-white/10 text-white' : 'text-white/30 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link to="/cases" className="text-wrlds-blue hover:text-white text-sm font-bold transition-colors">
              View All →
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div 
        ref={scrollRef}
        className={`overflow-x-auto scrollbar-hide scroll-smooth select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab md:cursor-grab'}`}
        style={{ touchAction: 'pan-y pan-x' }}
        onPointerDown={onPointerDown}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onPointerMove={onPointerMove}
      >
        <div className="flex gap-4 md:gap-8 px-6 md:px-20 pb-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex-shrink-0 w-[85vw] md:w-[600px] aspect-[1.5] rounded-2xl md:rounded-3xl overflow-hidden bg-white/5 border border-white/10 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                <div className="mb-2 md:mb-4">
                  <div className="flex gap-2 mb-2 md:mb-3 flex-wrap">
                    <span className="px-2 md:px-3 py-1 bg-wrlds-blue text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-md">
                      {project.brand}
                    </span>
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 md:px-3 py-1 bg-white/10 text-white/80 text-[10px] md:text-xs font-semibold rounded-md backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-5xl font-bold font-space text-white mb-1 md:mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm md:text-base max-w-sm line-clamp-2 md:line-clamp-none">{project.description}</p>
                </div>
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 text-white font-bold text-sm md:text-base group/link hover:text-wrlds-blue transition-colors mt-2 md:mt-4"
                  onClick={(e) => {
                    if (hasDraggedRef.current) {
                      e.preventDefault();
                      e.stopPropagation();
                    }
                  }}
                  onPointerUp={(e) => {
                    // Reset drag state on pointer up to allow next click
                    setTimeout(() => { hasDraggedRef.current = false; }, 50);
                  }}
                >
                  View Case Study <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}

          {/* End Card */}
          <Link 
            to="/cases" 
            className="flex-shrink-0 w-[70vw] md:w-[400px] aspect-[1.5] rounded-2xl md:rounded-3xl bg-wrlds-blue flex items-center justify-center group hover:bg-white transition-colors duration-500"
            onClick={(e) => hasDraggedRef.current && e.preventDefault()}
          >
            <div className="text-center text-white group-hover:text-black transition-colors">
              <h3 className="text-2xl md:text-4xl font-bold font-space mb-2">View All Cases</h3>
              <p className="opacity-80 mb-4 md:mb-6 text-sm md:text-base">See all our projects</p>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/30 group-hover:border-black/20 flex items-center justify-center mx-auto">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Scroll indicator - Mobile */}
      <div className="flex justify-center gap-1 mt-4 md:hidden">
        <span className="text-white/40 text-xs">← Swipe to explore →</span>
      </div>
    </section>
  );
};

export default Projects;
