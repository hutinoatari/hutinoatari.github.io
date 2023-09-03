import { FC } from "react";
import PageHead from "../components/PageHead";
import ExternalLink from "../components/ExternalLink";
import Image from "next/image";

const ProfilePage: FC<{}> = () => {
    const raceCourseList = [
        {
            name: "東京競馬",
            year: 2022,
            month: 6,
        },
        {
            name: "園田競馬",
            year: 2022,
            month: 9,
        },
        {
            name: "浦和競馬",
            year: 2022,
            month: 10,
        },
        {
            name: "大井競馬",
            year: 2022,
            month: 11,
        },
        {
            name: "川崎競馬",
            year: 2022,
            month: 12,
        },
        {
            name: "船橋競馬",
            year: 2023,
            month: 1,
        },
        {
            name: "中山競馬",
            year: 2023,
            month: 4,
        },
        {
            name: "さがら草競馬",
            year: 2023,
            month: 4,
        },
        {
            name: "賀茂競馬",
            year: 2023,
            month: 5,
        },
        {
            name: "京都競馬",
            year: 2023,
            month: 5,
        },
        {
            name: "金沢競馬",
            year: 2023,
            month: 6,
        },
        {
            name: "笠松競馬",
            year: 2023,
            month: 8,
        },
    ];
    const jiroList = [
        {
            name: "府中店",
            year: 2021,
            month: 5,
        },
        {
            name: "仙川店",
            year: 2022,
            month: 10,
        },
        {
            name: "小岩店",
            year: 2023,
            month: 1,
        },
        {
            name: "新宿小滝橋通り店",
            year: 2023,
            month: 1,
        },
        {
            name: "新宿歌舞伎町店",
            year: 2023,
            month: 2,
        },
        {
            name: "立川店",
            year: 2023,
            month: 3,
        },
        {
            name: "新潟店",
            year: 2023,
            month: 3,
        },
        {
            name: "三田本店",
            year: 2023,
            month: 4,
        },
        {
            name: "環七新代田店",
            year: 2023,
            month: 5,
        },
        {
            name: "京急川崎店",
            year: 2023,
            month: 6,
        },
    ];

    return (
        <>
            <PageHead title="PROFILE" />

            <h2>プロフィール</h2>
            <figure>
                <Image src="/face.jpg" width={256} height={256} />
                <figcaption>淵野アタリ</figcaption>
            </figure>
            <ul>
                <li>
                    <ExternalLink
                        title="Twitter"
                        url="https://twitter.com/hutinoatari"
                    />
                </li>
                <li>
                    <ExternalLink
                        title="GitHub"
                        url="https://github.com/hutinoatari"
                    />
                </li>
                <li>
                    <ExternalLink
                        title="はてなブログ"
                        url="https://hutinoatari.hatenablog.com"
                    />
                </li>
            </ul>

            <h2>既訪一覧</h2>
            <p>括弧内は初訪年月。</p>
            <h3>競馬</h3>
            <p>現地で観戦した場所のみ。</p>
            <ul>
                {raceCourseList.map((e) => (
                    <li>{`${e.name}(${e.year}/${e.month})`}</li>
                ))}
            </ul>
            <h3>二郎</h3>
            <ul>
                {jiroList.map((e) => (
                    <li>{`${e.name}(${e.year}/${e.month})`}</li>
                ))}
            </ul>
        </>
    );
};

export default ProfilePage;
