import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Gallery.module.scss";
import { WorkResponse } from "../types/api";

const GalleryPost: FC<{ work: WorkResponse }> = ({ work }) => {
    return (
        <article className={styles.item}>
            <div>
                <Image
                    alt={work.name}
                    src={work.image.url}
                    width={640}
                    height={480}
                    layout="responsive"
                />
            </div>
            <h3>{work.name}</h3>
            <p>{work.description}</p>
            <Link href={`/gallery/${work.id}`}>詳細を見る</Link>
        </article>
    );
};

export default GalleryPost;
