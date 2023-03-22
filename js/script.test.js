import apple from "./script";

expect(apple.color).toEqual("red");
expect(apple.texture).toEqual("juicy");
expect(apple.rating).toBeGreaterThan(6);
expect(apple.animalProduct).not.toBeTruthy();
