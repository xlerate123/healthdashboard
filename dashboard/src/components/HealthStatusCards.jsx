const HealthStatusCards = () => {
  return (
    <div className="mainhealth">

      <div className="status-card">
        <div className="iconlabel">
          <img
            src="src/assets/lungs.svg"
            alt="lungs icon"
            style={{ width: '30px', height: '30px', marginRight: '0.5rem' }}
          />
          <h4 className="label">Lungs</h4>
        </div>

        <p className="value">Date: 26 Oct 2021</p>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: '70%', backgroundColor: 'rgba(164, 50, 88, 0.85)' }}></div>
        </div>

      </div>

      <div className="status-card">
        <div className="iconlabel">
          <img
            src="src/assets/tooth.svg"
            alt="lungs icon"
            style={{ width: '30px', height: '30px', marginRight: '0.5rem' }}
          />
          <h4 className="label">Teeth</h4>
        </div>
        <p className="value">Date: 26 Oct 2021</p>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: '70%', backgroundColor: 'rgba(7, 239, 231, 0.85)' }}></div>
        </div>

      </div>

      <div className="status-card">
        <div className="iconlabel">
          <img
            src="src/assets/bone.svg"
            alt="lungs icon"
            style={{ width: '30px', height: '30px', marginRight: '0.5rem' }}
          />
          <h4 className="label">Bones</h4>
        </div>
        <p className="value">Date: 26 Oct 2021</p>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: '70%', backgroundColor: 'rgba(239, 135, 7, 0.87)' }}></div>
        </div>

      </div>

    <a style={{ display: 'block', marginTop: '30px', textAlign: 'right', color: '#463fd3',  cursor: 'pointer' }}>
      Details →
    </a>
      
    </div>
  )
}

export default HealthStatusCards