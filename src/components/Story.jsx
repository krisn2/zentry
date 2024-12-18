import AnimatedTitle from "./AnimatedTitle"

const Story = () => {

    // const frameRef = useRef('null');

    // const handleMouseLeave = () => {
    // }

    // const handleMouseMove = (event) => {
    // }
        

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
        <div 
        className="flex size-full flex-col items-center py-10 pb-24">
            <p className='font-general text-sm uppercase md:text-[10px]'
            >
                the multiversal is world
            </p>

            <div className="realtive size-full">
                <AnimatedTitle
                title="The story of a hidden realm"
                sectionId="#story"
                containerClass="mt-5 pointer-events-none 
                mix-blend-difference relative z-10 text-center"
                />

                <div className="story-img-container">
                    <div className="story-img-mask">
                        <div className="story-img-content">
                            <img ref={frameRef}
                            src="/img/entrance.webp" 
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            alt="entrance"
                            className="object-contain"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Story