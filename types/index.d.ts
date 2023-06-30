/**
 * Trymore is a flexible and customizable function for handling errors in JavaScript. It allows you to retry operations by passing a new callback to the trymore() method. The function is simple yet powerful, and can be easily integrated into your projects.
 */
declare module "trymore" {
  interface Trymore {
    /**
     *
     * @param callback The callback function to be executed.
     */
    trymore(callback: () => void): Trymore;
  }
  /**
   *
   * @param callback The callback function to be executed.
   */
  export default function trymore(callback: () => void): Trymore;
}
