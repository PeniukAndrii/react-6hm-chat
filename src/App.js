import React, {Component} from 'react';
import{BrowserRouter as Router,Switch,Route,Link}from 'react-router-dom';
import './App.css'
import MyUi from "./Components/MyUI/MyUI";


class App extends Component {


    render() {
        return (
            <Router>
                <div className={'blue'}>
                      <div className={'User-Nav'}>
                              <Link to={'/user/1'}>Иван Петрович</Link>
                              <Link to={'/user/2'}>Олег Бойко</Link>
                              <Link to={'/user/3'}>Андрій Сойка</Link>
                              <Link to={'/user/4'}>Бодун Швидкість</Link>
                              <Link to={'/user/5'}>Вован Мачмен</Link>
                      </div>
                        <div className={'User-Msg'}>
                            <Switch>
                                <Route path={`/user/:id`} render={(props)=>{
                                  let  {match:{params:{id}}}=props
                                    return <MyUi id={id} key={id}/>
                                }}/>
                            </Switch>
                        </div>



                </div>
            </Router>
        );
    }
}

export default App;