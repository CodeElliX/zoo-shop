"use client";
import Image from "next/image";
import styles from "./brands.module.css";
import { useEffect, useRef } from "react";

export default function Brands() {

    const itemsRef = useRef([]);

    const brands = [
        { src: "/brands/acana.png", w: 100, h: 100 },
        { src: "/brands/animall.jpg", w: 200, h: 100 },
        { src: "/brands/brit.png", w: 126, h: 100 },
        { src: "/brands/hills.png", w: 100, h: 100 },
        { src: "/brands/josera.png", w: 100, h: 100 },
        { src: "/brands/monge.jpg", w: 100, h: 100 },
        { src: "/brands/nd.jpg", w: 108, h: 100 },
        { src: "/brands/optimeal.jpg", w: 125, h: 100 },
        { src: "/brands/proplan.png", w: 185, h: 100 },
        { src: "/brands/royal.png", w: 160, h: 100 },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible)
                } else {
                    entry.target.classList.remove(styles.visible);
                }
            })
        },
            { threshold: 0.8 }
        );
        itemsRef.current.forEach(img => img && observer.observe(img));
        return () => observer.disconnect();
    }, [])

    return <div className={styles.wrap}>
        <h1 className={styles.description}>Ми пропонуємо вам корма преміум якості від відомих брендів:</h1>
        <div className={styles.brands}>
            {brands.map((item, index) => (
                <div key={index} ref={el => itemsRef.current[index] = el} className={styles.brand_img}>
                    <Image src={item.src} alt="brand" width={item.w} height={item.h} />
                </div>
            ))}
        </div>
    </div>
}