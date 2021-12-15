declare module 'cose-to-jwk' {
	export default function coseToJwk(cose: Buffer|ArrayBuffer): {[name: string]: string};
}
