
import styles from "@/styles/pages/home.module.scss";

export default function Home() {
  return (
    <main>
        <div className={styles.visual}>
            <video
                className={styles.heroVideo}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/media/visual_video.mp4" type="video/mp4" />
            </video>
        </div>
    </main>
  );
}
