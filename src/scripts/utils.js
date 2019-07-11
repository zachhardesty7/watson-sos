/**
 * Generate new object with all-depth, local refs resolved
 * if item in val arr match a key in obj, replace with key in obj's value.
 *
 * @param {{}} obj - any object
 * @returns {{}} object without circular refs
 */
export const safeCloneObj = obj => (
	Object.fromEntries(Object.entries(obj).map(([key, val]) => {
		const newVal = new Set(val)

		// avoid functional prog to simplify
		newVal.forEach((ref) => {
			if (obj[ref]) {
				// has key? merge with newVal & keep flattening
				obj[ref].forEach(nested => newVal.add(nested))
			}
		})

		return [key, [...newVal]]
	}))
)
