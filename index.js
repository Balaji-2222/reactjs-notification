const Notification = (props) => {
    const{className, url, message} = props;
  return(
        
    <div className= {`Notification ${className}`}>
      <img className="image"
        src={url}/>
      ><p className="paragraph">{message}</p>
    </div>
  )
};

const element = (
    <div className="bgContainer">
    <h1 className="heading">Notifications</h1>
    <Notification className="notification1" url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" message="Information Message"/>;
     <Notification className="notification2" url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" message="Success Message"/>;
      <Notification className="notification3" url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" message="Warning Message"/>;
       <Notification className="notification4" url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" message="Error Message"/>
)

ReactDOM.render(element, document.getElementById("root"));
