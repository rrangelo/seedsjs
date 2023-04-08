# SeedsJS

Please Note: Due to the very limited scope of this module, I do not anticipate needing to make very many changes to it. Expect long stretches of zero updates—that does not mean that the module is outdated.

## Introduction

SeedsJS, is a standarization for Plain Old JavaScript Objects (POJSO). As part of standarization, all seeds must be enchainable, have a zero-argument constructor and allow access to properties using getter and setter methods.



SeedsJS manage a Seeds contexts.
___
## Features

### Introspection

Is a process of analyzing a Bean to determine its capabilities. This is an essential feature of the SeedsJS specification because it allows another application, such as a design tool, to obtain information about a component.

### Properties

The values assigned to the properties determine the behaviour and appearance of that component.

### Customization

A customizer can provide a step-by-step guide that the process must follow to use the component in a specific context.

### Events

Seeds may interact with the EventObject EventListener model.

### Persistence

 Is the ability to save the current state of a Seed, including the values of a Seed's properties and instance variables, to nonvolatile storage and to retrieve them at a later time.

### Functions

A Seed not should use accessor methods to encapsulate the properties. A Seed provide other methods for business logic not related to the access to the properties.

___
## SeedsJS API

- Seed

___
## Conventions

In order to function as a SeedJS Prototype, an object prototype must obey certain conventions about method naming, construction, and behaviour. These conventions make it possible to have tools that can use, reuse, replace, and connect Seeds JS.

The required conventions are as follows:

- The prototype will have a public default constructor (with no arguments) and a maker strategy. This allows easy instantiation within editing and activation frameworks.

- The prototype properties must be accessible directly. This allows easy automated inspection and updating of bean state within frameworks. 

- All prototypes will be chainable.

___
## 