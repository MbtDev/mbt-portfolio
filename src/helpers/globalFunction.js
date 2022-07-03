import gsap, { Circ } from 'gsap';
import React from 'react'


export function importAll(r) {
    let images = {};

    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export function createItems(images) {
    var items = Object.entries(images).map(([key, value]) => {
        return (
            <img key={key} src={value.default} alt={value} />
        );
    })

    return items;

}

export function hideOverlay(delay) {
    var animation = gsap.timeline();

    animation
        .fromTo(".overlay",
            { background: "#0a9396" },
            {
                background: "#5A7EC5",
                repeat: -1,
                repeatDelay: 1,
                duration: 1,
                ease: Circ.easeOut,
                yoyoEase: "power3"
            })
        .to(".overlay", { display: "none" }, delay)
}