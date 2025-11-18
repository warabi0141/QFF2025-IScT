import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import qffLogo from '../../public/Badge_Dark.svg';
import {
  Button,
} from "@chakra-ui/react"

export const Hero = () => {
    const tape1ClassName = `${styles.tapeBlue} ${styles.tape1}`;
    const tape2ClassName = `${styles.tapePerple} ${styles.tape2}`;
    const tape3ClassName = `${styles.tapeRed} ${styles.tape3}`;
    const tape4ClassName = `${styles.tapeBlue} ${styles.tape4}`;
    const tape5ClassName = `${styles.tapePerple} ${styles.tape5}`;
    const tape6ClassName = `${styles.tapeRed} ${styles.tape6}`;
    const tape7ClassName = `${styles.tapeBlue} ${styles.tape7}`;
    const tape8ClassName = `${styles.tapePerple} ${styles.tape8}`;
    const tape9ClassName = `${styles.tapeRed} ${styles.tape9}`;

    const imgRef = useRef<HTMLImageElement | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        if (!imgRef.current) return;

        // IntersectionObserver を使って遅延読み込みをトリガー
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        observer.disconnect();
                    }
                });
            },
            { root: null, rootMargin: '200px', threshold: 0.1 }
        );

        observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.heroBackground}>
                <div className={tape1ClassName}></div>
                <div className={tape2ClassName}></div>
                <div className={tape3ClassName}></div>
                <div className={tape4ClassName}></div>
                <div className={tape5ClassName}></div>
                <div className={tape6ClassName}></div>
                <div className={tape7ClassName}></div>
                <div className={tape8ClassName}></div>
                <div className={tape9ClassName}></div>
            </div>
            {/* ロゴ画像: 遅延読み込みと読み込み完了でフェードイン */}
            <img
                ref={imgRef}
                src={shouldLoad ? qffLogo : undefined}
                data-src={qffLogo}
                alt="QFF Logo"
                className={`${styles.svgLogo} ${isLoaded ? styles.logoLoaded : ''}`}
                onLoad={() => setIsLoaded(true)}
                
            />
            <div className={styles.heroTextWrapper}>
                <p className={styles.heroText}>@Science Tokyo</p>
                <p className={styles.heroText}>2025年11月13日(木)・14日(金)開催</p>
                <p className={styles.heroText}>東京科学大学学内限定イベント</p>
            </div>
            <div className={styles.buttonWrapper}>
                <Button colorPalette='purple' m="1rem auto" size='xl' asChild>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeigFIa7Ud6gzbphf3m7hymdYutM0byiNo3241AJ_BDNGFBBA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                        参加登録はこちら
                    </a>
                </Button>
            </div>
        </div>
    );
};