import { FC } from "react";
import PageHead from "../components/PageHead";

const Custom404Page: FC<{}> = () => {
    return (
        <>
            <PageHead title="NOT FOUND" />
            
            <p>存在しないページです。</p>
        </>
    );
};

export default Custom404Page;
