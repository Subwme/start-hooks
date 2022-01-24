import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};
const ListComponent = ({ children }) => {
    const numChild = React.Children.toArray(children);
    return (
        <>
            {numChild.map((child, index) => {
                console.log(child);
                return (
                    <div className="list-group-numbers" key={index}>
                        {`${index + 1}. `}
                        <div>{child}</div>
                    </div>
                );
            })}
        </>
    );
};

ListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
