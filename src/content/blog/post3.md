---
id: 3
title: "Understanding Static in Java"
desc: "Demystifying the 'static' in Java, including static fields, methods, and blocks."
pubDate: "2024-07-17"
author: "Alberto Ramos"
image: "/blog/java-static.webp"
tags: ["Java"]
time: "10 min"
slug: "java-static"
---

# Understanding Static in Java

I recently started to learn Java and one of the first things I noticed at first and that I struggled to understand was the "static" keyword. It seemed to pop up everywhere, but I couldn't quite grasp what it meant or why it was so important. After diving into the documentation and trying out some code, here's what I learned.

## What Does Static Mean?

In Java, the `static` keyword is used for memory management primarily. It means that the member (field, method, or nested class) belongs to the class itself, rather than to any specific instance of the class. This can have several implications for how your code runs and how you use these members.

### Static Fields (Variables)

A static field is shared among all instances of a class. There is only one copy of the static field, regardless of the number of instances.

#### Example:
```java
public class MyClass {
    public static int staticVariable = 0;
    
    public static void increment() {
        staticVariable++;
    }
}
```
Accessing Static Fields:

```java
MyClass.staticVariable = 5;
```

Behavior:

The staticVariable is shared among all instances of MyClass.
If one instance modifies staticVariable, the change is reflected across all instances.
Static Methods
A static method belongs to the class rather than to any instance. It can be called without creating an instance of the class.

Example:
```java
public class MyClass {
    public static void myStaticMethod() {
        System.out.println("Static method called.");
    }
}
```
Calling Static Methods:

```java
MyClass.myStaticMethod();
```
Behavior:

A static method can access static fields and other static methods directly.
It cannot access instance fields or methods directly.
Static Blocks
Static blocks are used for static initializations of a class. They run once when the class is first loaded into memory.

Example:
```java
public class MyClass {
    static {
        System.out.println("Static block executed.");
    }
}
```
Behavior:
The static block executes when the class is loaded.
Static Classes
A static class (nested static class) is a static member of the outer class. It can access the static members of the outer class.

Example:
```java

public class OuterClass {
    static class NestedStaticClass {
        public void display() {
            System.out.println("Static nested class.");
        }
    }
}
```
Accessing Static Classes:
```java
OuterClass.NestedStaticClass nested = new OuterClass.NestedStaticClass();
nested.display();
```
Opposite of Static: Instance Members
The opposite of static in Java is instance. Instance members (fields, methods, and inner classes) are associated with an object of the class. Each object (instance) of the class has its own copy of instance fields and can call instance methods.

Instance Fields
Instance fields are unique to each object created from the class. Each instance has its own copy of these fields.

Example:
```java
public class Car {
    String color;
    String model;
    int year;

    public void displayDetails() {
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Year: " + year);
    }
}
```
Instance Methods
Instance methods can access instance fields and other instance methods. They are called on specific instances of a class.

Example:
```java 
public class Car {
    public void startEngine() {
        System.out.println("The engine is starting...");
    }
}
```
Using Instance Methods:
```java
Car myCar = new Car();
myCar.startEngine(); // Outputs: The engine is starting...
```

Conclusion
Understanding the static keyword in Java can be tricky at first, but it's a powerful feature that allows for efficient memory management and class-level operations. Static fields and methods are shared across all instances, while instance fields and methods are unique to each object. This distinction is crucial for writing efficient and effective Java programs.

If you have any questions or need further clarification, feel free to reach out or leave a comment below. Happy coding!

<a class="styled-link" href="https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html" target="_blank">Oracle Java Documentation</a>
