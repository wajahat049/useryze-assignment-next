## Overview

This project demonstrates an A/B testing setup using Next JS, TypeScript and Cookies. The main feature is to show different versions of product cards i.e `Version A` and `Version B` based on user assignment. The version is assigned randomly and can also be controlled via a configuration file, and the assigned version persists.

## Features

- **A/B Testing**:  Randomly assigns a user to either Version A or Version B of the product card. This assignment is persisted using `cookies`.
- **Configuration-Based Version Assignment**:  Allows setting a default version via a configuration file (`config.json`).
- **Product Card Design**:  Two versions of the product card are available:
  - **Version A**:  A basic product card with standard design.
  - **Version B**:  An enhanced product card with additional UX features, including a discount price display.
- **State Persistence**:  The assigned version persists across user sessions, ensuring consistent experience using cookies.

## Approach

1. **Configuration File**:

   - A `config.json` file is used to define a `defaultVersion`. If this value is provided, it is used to set the version for all users.
   - If no `defaultVersion` is provided, the version is assigned randomly (50% chance for either "A" or "B").
  
1. **Middleware**:

   - All the process such as checking for default version, assigning random version and setting that version in cookie is done in the `middleware.ts` file.
   - `middleware.ts` file works on server side.

2. **State Persistence**:

   - The version state is persisted using `cookies` so that the assigned version remains consistent across page reloads or user sessions.

3. **Product Card UI/UX**:
   - Two versions of the product card are developed one with bad UI/UX and one with good UI/UX.

### Version B Improvements over Version A

1. **Layout**:  Version B has a nice good looking display of product cards in a nice layout which persists the customers to stay at the website.
2. **Image**:  Version B image responds with mouse hover and has soft round corners which improves the UI.
3. **Ratings**:  Version B represents product ratings which can gain customer trust and can result in increased conversion rate.
4. **Discount Price**:  Version B and Version A prices are same but Version B allows more customer to consider buying customers using discounted price technique.
5. **Stock Information**:  Version B displays stock levels that can create urgency to buy among the customers.
6. **Prominent Button**:  Version B has a prominent large Add to Cart Button with nice color to attract more audiences.


### Trade-offs

- **Direct Manual Configuration**: Using a `config.json` file makes it easy to manage the version settings. However, this method does not support dynamic updates without changing in project directly.It can be more effectively achieved using an Admin Panel.

### Enhancements

- **Dynamic toggle**:  Using a `config.json` file makes it easy to manage the version settings. If this value is provided, it is used to set the version for all users. Possible values are null, "A" and "B".
- **Note**: Make sure to delete the `version` cookie name in the Application Section of `Inspect` under Application, if you want to see changes on the same browser window.

## Running the Project Locally

### Prerequisites

- **Node.js** (v14 or higher)
- **npm**

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/wajahat049/useryze-assignment-next.git
   cd useryze-assignment-next
   ```

2. **Install Dependencies**:

   ```
   npm install
   ```

3. **Run Project Locally**:
   ```
   npm run dev
   ```

