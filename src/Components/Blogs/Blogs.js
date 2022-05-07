import React from 'react';

const Blogs = () => {
    return (
        <div className='container py-3'>
            <div className="row">
                <div className="col-12">
                    <article className='border p-2 mb-2'>
                        <p className='h3'><span className='h2'>1.Question Name:</span> Difference between javascript and nodejs.</p>
                        <p className='text-justify'><span className='h4'>Answer: </span>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. Javascript can only be run in the browsers. It is basically used on the client-side. Javascript is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. Where, NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. Nodejs does not have capability to add HTML tags. V8 is the Javascript engine inside of node.js that parses and runs Javascript.  Nodejs is written in C, C++ and Javascript.
                        </p>
                    </article>
                    <article className='border p-2 mb-2'>
                        <p className='h3'><span className='h2'>2.Question Name:</span> What is the purpose of jwt and how does it work.</p>
                        <p className='text-justify'><span className='h4'>Answer: </span>JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                        </p>
                        <p className='text-justify'>In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required. Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. if you send JWT tokens through HTTP headers, you should try to prevent them from getting too big. Some servers don't accept more than 8 KB in headers. If you are trying to embed too much information in a JWT token, like by including all the user's permissions, you may need an alternative solution, like Auth0 Fine-Grained Authorization.</p>
                    </article>
                    <article className='border p-2'>
                        <p className='h3'><span className='h2'>3.Question Name:</span> Differences between sql and nosql databases.</p>
                        <p className='text-justify'><span className='h4'>Answer: </span>When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision.
                        </p>
                        <p className='text-justify'>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.  </p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Blogs;