import one from '../assets/images/C1.jpg';
import two from '../assets/images/C2.jpg';
import three from '../assets/images/C3.jpg';
import four from '../assets/images/C4.jpg';


function Popolar(){
    return(
        <div class="popular">
            <h1>Most Popular</h1>
            <p>Pick the best</p>
    
            <div class="popular__container">
                <div class="course-card">
                    <img src={one} alt="card img" />
                    <p>2024 Full Stack Developement</p>
                    <p>Col Steele</p>
                    <p>4.5 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={two} alt="card img" />
                    <p>2024 JAVA Developement</p>
                    <p>Col Steele</p>
                    <p>4.3 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={three} alt="card img" />
                    <p>2024 Python Developement</p>
                    <p>Col Steele</p>
                    <p>4.6 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={four} alt="card img" />
                    <p>2024 Marketing strategies</p>
                    <p>Col Steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={three} alt="card img" />
                    <p>2024 Full Stack Developement</p>
                    <p>Col Steele</p>
                    <p>4.5 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={two} alt="card img" />
                    <p>2024 JAVA Developement</p>
                    <p>Col Steele</p>
                    <p>4.3 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={one} alt="card img" />
                    <p>2024 Python Developement</p>
                    <p>Col Steele</p>
                    <p>4.6 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={four} alt="card img" />
                    <p>2024 Marketing strategies</p>
                    <p>Col Steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
            </div>
            
        </div>
    )
}

export default Popolar