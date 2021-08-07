# StronglyTyped

StronglyTyped is an experiment to introduce strong-typed variables to JS. Its goal is to offer type safety through the direct use of pure JS syntax. It uses Proxy to make this magic happen!

## Syntax
- Declare a typed variable
    ```
    let var_name = mutableVar(type, value)
    ```
- Access the value
    ```
    var_name._
    ```
- Mutate the variable
    ```
    var_name._ = some_value
    ```

## Known Limitations
- I have only tested it using primitives. I am not sure whether it works for Objects.

![carbon](https://storage.googleapis.com/replit/images/1619034291599_deaa9ddfd39a30f4a08a7db876714a27.png)
![carbon(1)](https://storage.googleapis.com/replit/images/1619034301693_1f017daa5a9c3f4f147c467b6b2265a6.png)
![carbon(2)](https://storage.googleapis.com/replit/images/1619034302523_c47ace79f7eb9b6e2e478e9d0afddde2.png)
![carbon(3)](https://storage.googleapis.com/replit/images/1619034308136_dfafdd991e406c7de3f6099f83f515fd.png)