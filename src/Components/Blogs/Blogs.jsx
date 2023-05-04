import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <h4 className='text-center mt-5 pb-4 underline'>This is Blog Page.</h4>
            <div>
                <h5>Q: Tell us the differences between uncontrolled and controlled components.</h5>
                <p><strong>Ans:</strong> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>

                <h5>Q: How to validate React props using PropTypes?</h5>
                <p><strong>Ans:</strong> Props and PropTypes are important mechanisms for passing read-only attributes between React components.We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>


                <h5>Q: Tell us the difference between nodejs and express js?</h5>
                <p><strong>Ans:</strong> Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>

                <h5>Q: What is a custom hook, and why will you create a custom hook?</h5>
                <p><strong>Ans:</strong> Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>

            </div>
        </Container>
    );
};

export default Blogs;