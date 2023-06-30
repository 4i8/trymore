/**
 * Trymore is a flexible and customizable function for handling errors in JavaScript. It allows you to retry operations by passing a new callback to the trymore() method. The function is simple yet powerful, and can be easily integrated into your projects.
 */
function trymore(callback: () => void) {
  try {
    callback();
    return {
      trymore: () => {
        return {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          trymore: () => {},
        };
      },
    };
  } catch (err) {
    return {
      trymore: (callback: () => void) => trymore(callback),
    };
  }
}
export default trymore;
