import Product from "./Product"
import tv from "../assets/img/tv.jpg"
import mac from "../assets/img/mac.jpg"
import celu from "../assets/img/celu.jpg"
import cafe from "../assets/img/cafe.jpg"

function Main(props){


    return(
        <main>
            <Product name="Start TV" qty={5} initialstock={1} pic={tv} />
            <Product name="Smartphone" qty={10} initialstock={1} pic={celu} />
            <Product name="Cafetera" qty={15} initialstock={1} pic={cafe} />
            <Product name="Macbook Pro" qty={6} initialstock={1} pic={mac} />

        </main>
    )
}

export default Main