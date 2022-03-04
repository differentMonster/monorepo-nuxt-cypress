// this path must be relative to .nuxt since it registered at Runtime
import * as accountsStore from '../modules/accounts/store/accounts.js'

export default async ({
    store
}) => {
    return await store.registerModule('accounts', accountsStore, {
        namespaced: accountsStore.namespaced,
    })
}