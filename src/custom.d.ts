type RecordItem = {
	tages: string[]
	notes: string
	type: string
	amount: string // 数据类型
	date?: Date // 类 / js构造函数   ？可以不存在
}

type Tag = {
	id: string;
	name: string;
}
type TagListModel = {
	data: Tag[]
	fetch: () => Tag[]
	create: (name: string) => 'success' | 'duplicated' // 联合类型
	update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
	remove: (id: string) => boolean
	save: () => void
}

interface Window {
}
