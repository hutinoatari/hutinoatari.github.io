import { FC } from "react";

const ReturnPageTopButton: FC<{}> = () => {
    return (
        <button onClick={()=>{window.scrollTo(0, 0)}}>ページの頭に戻る</button>
    );
};

export default ReturnPageTopButton;
