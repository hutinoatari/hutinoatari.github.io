import { FC } from "react";
import PageHead from "../components/PageHead";
import ExternalLink from "../components/ExternalLink";

const ProfilePage: FC<{}> = () => {
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
        </>
    );
};

export default ProfilePage;
