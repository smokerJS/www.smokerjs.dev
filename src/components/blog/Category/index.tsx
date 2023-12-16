import Posts from './Posts';
import $ from './style.module.scss';

interface CategoryProps {
    index: number;
}

const Category = (props: CategoryProps) => {
    const { index } = props;

    return (
        <div className={`${$.category} ${$[`s${index}`]}`}>
            <h3 className={$.category_name}>Component</h3>
            <div className={$.category_contents}>
            {/* <div className={$.preview}>
                <strong className={$.preview_title}>
                제목제목제목제목제목제목제목제목제목제목제목
                </strong>
                <div className={$.preview_content}>
                <span className={$.preview_created_at}>2022 03 04</span>
                <p className={$.preview_description}>
                요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약요약
                </p>
                </div>
            </div> */}
                <Posts />
            </div>
        </div>
    )
}

export default Category;