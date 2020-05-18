import * as React from 'react';
import Card from '../card/index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
require('./index.scss');

const ListTemplate = ({ children }) => {
    return <ul className={'list'}>{children}</ul>
}

const List = (props) => {
    const items = props.items.map((item, index) => {
        return (
            <li className="list-item" key={item.id}>
                <Link className="app__list-link" to={`/character/${item.id}`}>
                    <Card
                        image={item.image}
                        title={item.name}
                        subtitle={item.house}
                    />
                </Link>
            </li>
        )
    });

    return <ListTemplate>{items}</ListTemplate>
}

// class CharacterList extends Component {
//     render() {
//         const { filterCharResults } = this.props;
//         return (
//             <ul className="app__list">
//                 {filterCharResults.map(item => {
//                 })}
//             </ul>
//         );
//     }
// }

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};

export default List;