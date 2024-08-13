function Main(props){
    return(
        <a href="#">
            <div className="imgBox">
                <img src={`${process.env.PUBLIC_URL}/images/main_${props.i}.jpg`}/>
                {/* { <img src={process.env.PUBLIC_URL+"/images/main_"+props.i+".jpg"}/> } */}
            </div>
            <div className="txtBox">
                <p>{props.m[props.i].d}</p>
                <p>{props.m[props.i].t}</p>
                <p>{props.m[props.i].n}</p>
            </div>
        </a>
    )
}
function CollectionSlide(props){
    return(
        <a href="#">
            <div className="imgBox">
                <img src={`${process.env.PUBLIC_URL}/images/right_${props.i}.jpg`}/>
            </div>
            <div className="txtBox">
                <p>{props.right[props.i].d}</p>
                <p>{props.right[props.i].t}</p>
            </div>
        </a>
    )
}
function Best(props){
    return(
        <a href="#">
            <div className="imgBox">
                <img src={`${process.env.PUBLIC_URL}/images/best_${props.i}.jpg`}/>
            </div>
            <div className="txtBox">
                <p>{props.best[props.i].n}</p>
                <p>{props.best[props.i].d}</p>
                <p>{props.best[props.i].t}</p>
            </div>
        </a>
    )
}
function Tv(props){
    return(
        <a href="#">
            <div className="imgBox">
                <img src={`${process.env.PUBLIC_URL}/images/tv_${props.i}.jpg`}/>
            </div>
            <div className="txtBox">
                {/* <p>{props.tv[props.i].m}</p> */}
                <p>{props.tv[props.i].d}</p>
                <p>{props.tv[props.i].t}</p>
            </div>
        </a>
    )
}
function Tv1(props){
    return(
        <a href="#">
            <div className="imgBox">
                <img src={`${process.env.PUBLIC_URL}/images/tv1_${props.i}.jpg`}/>
            </div>
            <div className="txtBox">
                {/* <p>{props.tv[props.i].m}</p> */}
                <p>{props.tv1[props.i].d}</p>
                <p>{props.tv1[props.i].t}</p>
            </div>
        </a>
    )
}
function Tv2(props){
    return(
        <a href="#">
            <div className="imgBox">
                <img src={`${process.env.PUBLIC_URL}/images/tv2_${props.i}.jpg`}/>
            </div>
            <div className="txtBox">
                {/* <p>{props.tv[props.i].m}</p> */}
                <p>{props.tv2[props.i].d}</p>
                <p>{props.tv2[props.i].t}</p>
            </div>
        </a>
    )
}
function Focus(props){
    return(
        <a href="#">
            <div className="imgBox">
                <img src={`${process.env.PUBLIC_URL}/images/focus_${props.i}.jpg`}/>
            </div>
            {/* <div className="txtBox">
                <p>{props.tv[props.i].m}</p>
                <p>{props.tv2[props.i].d}</p>
                <p>{props.tv2[props.i].t}</p>
            </div> */}
        </a>
    )
}

export {Main, CollectionSlide, Best, Tv ,Tv1,Tv2,Focus}