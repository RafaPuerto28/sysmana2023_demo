import { HomePhotoWrapper, StyledImage } from "./HomePhoto.styled";

const HomePhoto = () =>{
    return(
        <HomePhotoWrapper>
            <StyledImage src="/img/profile-image.png" alt="home photo" />
        </HomePhotoWrapper>
    )
}

export default HomePhoto;