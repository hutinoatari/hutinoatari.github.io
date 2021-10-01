import { FC } from "react";
import PageHead from "../components/PageHead";
import ExternalLink from "../components/ExternalLink";

const AboutPage: FC<{}> = () => {
    return (
        <>
            <PageHead title="ABOUT" />

            <h2>ABOUT</h2>
            <p>靴紐を使った手芸とフロントエンド開発をやってる。</p>
            
            <table>
                <tbody>
                    <tr>
                        <th>名前</th>
                        <td>淵野アタリ</td>
                    </tr>
                    <tr>
                        <th>Twitter</th>
                        <td>
                            <ExternalLink
                                title="@hutinoatari"
                                url="https://twitter.com/hutinoatari"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>GitHub</th>
                        <td>
                            <ExternalLink
                                title="hutinoatari"
                                url="https://github.com/hutinoatari"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default AboutPage;
