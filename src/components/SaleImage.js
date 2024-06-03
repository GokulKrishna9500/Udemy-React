import one from '../assets/images/sale-image.jpg';


function Saleimage() {
    return (
        <div class="sale-image">
            <img src={one} alt="sale_image" />
            <div class="sale-image__offer">
                <h2>Udemy flash Sale! 24 hours to save.</h2>
                <p>Get the top courses for just 499. Just one day to save but a lifetime to learn</p>
            </div>
        </div>
    )
}

export default Saleimage