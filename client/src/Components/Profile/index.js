function Profile() {
  return (
    <>
      <div className="form-group d-flex flex-column">
        <label for="emailInput">Электронная почта</label>
        <input type="email" id="emailInput" className="form-control" placeholder="Введите адрес эл. почты" />
        <label for="currentCity">Город</label>
        <input type="text" id="emailInput" className="form-control" placeholder="Ваш город ..." />
          </div>
    </>
  )
}

export default Profile
