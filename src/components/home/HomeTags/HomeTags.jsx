import { HomeTagsWrapper, Tag, TagsContainer } from "./HomeTags.styled";

const TAGS = [
    'Prueba1',
    'Prueba2',
    'Prueba3',
    'Prueba4',
    'Prueba5',
    'Prueba6',
    'Prueba7',
    'Prueba8',
]

const HomeTags = () =>{
    return(
        <HomeTagsWrapper>
            <TagsContainer>
                {TAGS.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                    ))}
            </TagsContainer>
        </HomeTagsWrapper>
    );
}

export default HomeTags;