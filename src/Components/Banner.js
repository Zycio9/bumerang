import React, { useEffect, useRef } from 'react'
import "./Banner.scss"
const Banner = () => {
    const reff = useRef(null)
    // Resize the prototype to fit in the window
    // var screen = document.querySelector('.screen')

    useEffect(() => {
        let screen = reff.current
        var screenMargin = .2,
            desktopmodeWidth = 1120;

        function resizeScreen() {
            var screenHeight = screen.offsetHeight,
                screenWidth = screen.offsetWidth,
                windowHeight = document.body.offsetHeight / (1 + screenMargin),
                windowWidth = document.body.offsetWidth / (1 + screenMargin),
                windowFullWidth = document.body.offsetWidth,
                scale;

            if (windowFullWidth >= desktopmodeWidth) {
                screen.style.transform = '';
                return;
            }

            scale = Math.min(windowWidth / screenWidth, windowHeight / screenHeight);

            // if (scale < 1) {
            //     screen.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
            // } else {
            //     screen.style.transform = 'translate(-50%, -50%) scale(1)';
            // };
        };

        window.onresize = resizeScreen;
        // resizeScreen();

        // Parallax behaviour
        const layers = document.body.querySelectorAll('.parallax-img')
        let parallaxLayer1 = layers[0]
        let parallaxLayer2 = layers[1]
        let parallaxLayer3 = layers[2]
        // screen = document.querySelector('.screen');

        document.body.addEventListener('mousemove', onMouseMove);

        function onMouseMove(ev) {
            parallax(ev, parallaxLayer1, 1);
            parallax(ev, parallaxLayer2, 2);
            parallax(ev, parallaxLayer3, 3);
        };

        function parallax(ev, parallaxLayer, layer) {
            var layerCoeff = 100 / layer,
                screenWidth = screen.offsetWidth,
                screenHeight = screen.offsetHeight,
                parallaxLayerWidth = parallaxLayer.offsetWidth,
                parallaxLayerHeight = parallaxLayer.offsetHeight,
                mouseX = ev.pageX,
                mouseY = ev.pageY,
                x, y;

            x = (screenWidth - parallaxLayerWidth) / 2 - (mouseX - (screenWidth / 2)) / layerCoeff;
            y = (screenHeight - parallaxLayerHeight) / 2 - (mouseY - (screenHeight / 2)) / layerCoeff;

            parallaxLayer.style.top = y + 'px';
            parallaxLayer.style.left = x + 'px';
            parallaxLayer.style.transform = 'translate(0,0)';
        };


    })



    return (
        <div className="screen" ref={reff}>
            <div className="parallax">
                <div className="parallax-imgwrapper">
                    <img className="parallax-img" src="/assets/1.png" alt="" />
                    <img className="parallax-img" src="//my-assets.netlify.com/codepen/dailyui-003/layer1@1.5x.png" alt="" />
                    {/* <img className="parallax-img" src="//my-assets.netlify.com/codepen/dailyui-003/layer2@1.5x.png" alt="" /> */}
                    {/* <img className="parallax-img" src="//my-assets.netlify.com/codepen/dailyui-003/layer3@1.5x.png" alt="" /> */}
                    <img className="parallax-img" src="/assets/2.png" alt="" />
                </div>
                <div className="parallax-copy">
                    <h1 className="parallax-headline">Chwytliwy tekst<br></br>
                        kt??ry powali<br></br>
                        na kolana
                    </h1>

                </div>
                <a href="#welcome" className="scroll center-content scrollto">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <span className="text">Przewi?? w d????</span>
                </a>
                {/* <div className='icon-scroll'></div>
                <div className="scrollbar"></div> */}
            </div >

        </div >
        // <div className="jumbotron d-flex align-items-center">
        //     <div className="container text-center">
        //         <h1 className="display-1 mb-4">Wypo??yczalnia<br />Bumerang</h1>
        //     </div>
        //     <div className="rectangle-1"></div>
        //     <div className="rectangle-2"></div>
        //     <div className="rectangle-transparent-1"></div>
        //     <div className="rectangle-transparent-2"></div>
        //     <div className="circle-1"></div>
        //     <div className="circle-2"></div>
        //     <div className="circle-3"></div>
        //     <div className="triangle triangle-1">
        //         <img src="assets/obj_triangle.png" alt="" />
        //     </div>
        //     <div className="triangle triangle-2">
        //         <img src="assets/obj_triangle.png" alt="" />
        //     </div>
        //     <div className="triangle triangle-3">
        //         <img src="assets/obj_triangle.png" alt="" />
        //     </div>
        //     <div className="triangle triangle-4">
        //         <img src="assets/obj_triangle.png" alt="" />
        //     </div>
        // </div>
    )
}

export default Banner