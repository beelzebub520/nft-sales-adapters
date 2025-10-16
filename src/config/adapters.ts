import {IBasicProviderOptions} from "../sdk/basic-provider";


const BASE: IBasicProviderOptions[] = [
    {
        name: "element-base-1",
        basicProvider: "element-bp-3",
        block: 29872017,
        contract: "0xa39a5f160a1952ddf38781bd76e402b0006912a9",
        chainId: 94,
        defaultPaymentToken: "eth",
    },
];

export const ADAPTERS = [
    ...BASE,
]