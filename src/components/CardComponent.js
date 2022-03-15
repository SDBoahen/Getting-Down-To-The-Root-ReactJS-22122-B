


function CardComponent( props ){  // props: { personObj: {} ,  juiceJug="" }

    //// js

            console.log("-------- In cardComponent --------")  // 
            console.log("props: ", props)  // 

    //// js

    //// more html like

        return(<div>
                
            <h2>================</h2>
                <h2>{props. personObj .name}</h2>
                <img src={props.personObj.image_URL} />
                <p>Favorite Color:{props.personObj.favColor}</p>

                <p>Favorite Juice:{props.juiceJug}</p>

            <h2>================</h2>

        </div>)

    //// more html like 

}
export default CardComponent