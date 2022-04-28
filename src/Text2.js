import './App.css';

const Text2 = ({dataObject}) => {
    const {name, description} = dataObject;
    return (
        <><><div>
            <p className="Text-30">{name}</p>
        </div></><div>
                <p className="Text-20">{description}</p>
            </div></>
    );
};

export default Text2;