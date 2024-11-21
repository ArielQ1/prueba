const Card = () => {
    return (
        <div className="flex flex-col w-8/12 mx-auto my-2 bg-indigo-950 rounded-2xl">
            <h1 className="text-6xl font-bold underline text-center py-2 text-white">Hola Mundo a Todos</h1>
            <img className="h-72 object-cover mx-3 rounded-2xl" src="https://i.ytimg.com/vi/eDozUORCWuk/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgRyguMA8=&rs=AOn4CLAEEDF9xUODaaG3WgO0qCDGmwKg_g" alt="" />
            <p className="text-xl p-4 text-center text-white">Este es un ejemplo de un componente de React Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati, iure consequuntur, provident adipisci nulla ducimus voluptas accusamus velit praesentium incidunt quidem sit laborum non ut optio vero nostrum quis.</p>
        </div>
    );
}

export default Card;