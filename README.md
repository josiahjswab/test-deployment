
# Hey there... Read me!

Hi, if your reading this then it is most likely that you too are students at SDCS and have been tasks in some way with this site. Our intentions with this read me is to accelerate your understanding of the intent behind this code.

- It is recommended to use [AirBnB](https://github.com/airbnb/javascript) style rules for this project.
- It is recommended to test sites performance and accsesibility with [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en).

### React is component based so leverage it.
Use a component to seperate:
- Large visual sections of the screen.
- Complex logic and features which may potentially be reused.
- Data arrays which would clog up the component that calls it.

An example of each of these components are:

- ClassBanner.jsx - A banner image with overlayed text.
- TypistLoop.jsx - Logic which produces the typing animation on the class banner.
- Testimonials.jsx - An array of verbose objects

By seperating your pages into sub sections you not only make them reusable but you will **make git workflow much easier.** Each of your team members will be able to work on seperate components on the same page and not have monster merges when its time to bring all your work back togethor on git. *Trust me lol.*

### You can import sass files to your main sass file.
> And the power of classNames is that you can have multiple.

The `styles.scss` imports the following three `.scss` files.
```           
              - fonts.scss
styles.scss{  - header.scss
              - footer.scss

```


- `fonts.scss` we felt it a good idea to put a file like this out of the way. Once it is written it will be unlikely to be ever visited again unless another font is added.
- `styles.scss` contains all general className styles.


While the header and footer were defined in their own files a change in css architecture lead to a generouse use of classnames to create a less restrictive css structure. Nesting scss style objects is cool but it should only be used as a way to dial in on elements rather then defining each property attribute in each object. General attributes are classNames which can be more fluidly added while tryping up the Components with jsx. An example of this to render an element with a diffrent font one simply changes the name to one of the three defined fonts from our styles.scss library this will over-rule any inhertance proprties that were set. If it is a battle between siblings then it will be the cascade rule:
> The rule farthest down the list wins.
```
.barlow {
  font-family: $header-font;
}
.pt-sans {
  font-family: $body-font;
}
.antic {
  font-family: $accent-font;
}
.shadow {
  box-shadow: 
    inset 
      0 -3em 3em rgba(0, 0, 0, 0.1), 
      0 0 0 2px rgb(255, 255, 255),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
```
* The below divs will render three diffrent font-styles. *
```
<div className="sdcs barlow">SAN DIEGO CODE SCHOOL</div>
<div className="sdcs pt-sans">SAN DIEGO CODE SCHOOL</div>
<div className="sdcs antic">SAN DIEGO CODE SCHOOL</div>
```
* To add a box-shadow I will simply call upon a defined style object called .box-shadow *
```
<div className="sdcs barlow shadow">SAN DIEGO CODE SCHOOL</div>
```
The first `className="sdcs"` was used as a dial in and descriptor.

#### If you delete a depandency make sure you delete and rebuild the pack-lock.json and /node_modules.