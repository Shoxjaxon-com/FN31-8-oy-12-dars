import ImgConteiner from "../componets/ImgConteiner";
import { useGlobalContext } from "../hook/useGlobalContext"; // 🔹 Ismni katta-kichik harflariga e'tibor bering

function LikkedImages() {
    const {likkedImages} = useGlobalContext();
    
        if(likkedImages.length ==0){
            return <h1>You don't choose andy images yet!</h1>
        }
    return (
        <div className="align-elemets">
            {likkedImages.length >0 && <ImgConteiner images={likkedImages} />}
        </div>
    );
}

export default LikkedImages;
