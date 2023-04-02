import { FC } from "react";
import PageHead from "../components/PageHead";
import ExternalLink from "../components/ExternalLink";

const ProfilePage: FC<{}> = () => {
    const raceCourseList = [
        {
            name: "東京",
            year: 2022,
            month: 6,
        },
        {
            name: "園田",
            year: 2022,
            month: 9,
        },
        {
            name: "浦和",
            year: 2022,
            month: 10,
        },
        {
            name: "大井",
            year: 2022,
            month: 11,
        },
        {
            name: "川崎",
            year: 2022,
            month: 12,
        },
        {
            name: "船橋",
            year: 2023,
            month: 1,
        },
        {
            name: "中山",
            year: 2023,
            month: 4,
        },
    ];
    const jiroList = [
        {
            name: "府中",
            year: 2021,
            month: 5,
        },
        {
            name: "仙川",
            year: 2022,
            month: 10,
        },
        {
            name: "小岩",
            year: 2023,
            month: 1,
        },
        {
            name: "小滝橋",
            year: 2023,
            month: 1,
        },
        {
            name: "歌舞伎町",
            year: 2023,
            month: 2,
        },
        {
            name: "立川",
            year: 2023,
            month: 3,
        },
        {
            name: "新潟",
            year: 2023,
            month: 3,
        },
        {
            name: "三田",
            year: 2023,
            month: 4,
        },
    ];
    
    return (
        <>
            <PageHead title="PROFILE" />

            <h2>プロフィール</h2>
            <dl>
                <dt>名前</dt>
                <dd>淵野アタリ</dd>
                <dt>サークル</dt>
                <dd>捻れたバベル</dd>
                <dt>Twitter</dt>
                <dd>
                    <ExternalLink
                        title="@hutinoatari"
                        url="https://twitter.com/hutinoatari"
                    />
                </dd>
                <dt>GitHub</dt>
                <dd>
                    <ExternalLink
                        title="hutinoatari"
                        url="https://github.com/hutinoatari"
                    />
                </dd>
                <dt>HP</dt>
                <dd>hutinoatari.dev</dd>
            </dl>

            <h2>既訪一覧</h2>
            <p>括弧内は初訪年月。</p>
            <h3>競馬</h3>
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
