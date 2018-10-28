import { List } from 'immutable';

export function concatNoRedundant(list1, list2) {
    return List(list1.concat(list2))
            .groupBy(x => x.id)
            .map(x => x.last())
            .toList()
            .toJS()
}