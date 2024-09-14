<template>
    <el-container class="mo-sql">
        <el-aside class="mo-sql__aside">
            <monaco-editor ref="moEditor" v-model:code="code" :options="options" />
        </el-aside>
        <el-main class="mo-sql__main">
            <div class="mo-sql__exec">
                <el-button type="primary" :icon="CaretRight" :loading="loading" @click="execSQL">执行</el-button>
            </div>
            <div class="mo-sql__result">
                <el-table v-if="tableHeader.length > 0" :data="tableData" height="100%" border>
                    <el-table-column
                        v-for="header in tableHeader"
                        :key="header"
                        :prop="header"
                        :label="header"
                        :formatter="(row, column, value) => (value == null ? 'null' : value)"
                    />
                </el-table>
                <el-input v-if="message !== ''" v-model="message" autosize type="textarea" readonly resize="none" />
            </div>
        </el-main>
    </el-container>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { CaretRight } from '@element-plus/icons-vue';
import MonacoEditor from './MonacoEditor.vue';
import alasql from 'alasql';

const placeholder = `-- CREATE TABLE table1 (
--     field1 VARCHAR NOTNULL DEFAULT '',
--     field2 INT DEFAULT 0
-- );

-- INSERT INTO table1 (field1) VALUE ('string1');
-- INSERT INTO table1 (field2) VALUE (2);
-- INSERT INTO table1 (field1, field2) VALUE ('string2', 3);

-- SELECT * FROM table1;`;

// 编辑器组件
const moEditor = ref();
// SQL代码
const code = ref(placeholder);
// 编辑器参数
const options = reactive({ language: 'sql' });

// 表头
const tableHeader = reactive([]);
// 表数据
const tableData = reactive([]);
// 信息
const message = ref('');
// 执行中
const loading = ref(false);

// 执行SQL
const execSQL = () => {
    loading.value = true;
    tableHeader.splice(0);
    tableData.splice(0);
    message.value = '';
    const execCode = moEditor.value.getSelection() || code.value;
    const sqls = execCode.split(';').filter((sql) => sql.trim() !== '' && !sql.trim().startsWith('--'));
    if (sqls.length > 0) {
        alasql(sqls)
            .then((res) => {
                res = res.pop();
                if (res instanceof Array && res.length > 0) {
                    tableHeader.push(...Object.keys(res[0]));
                    tableData.push(...res);
                } else {
                    message.value = `执行结果：\n${JSON.stringify(res)}`;
                }
                loading.value = false;
            })
            .catch((error) => {
                message.value = `执行错误：\n${error}`;
                loading.value = false;
            });
    } else {
        loading.value = false;
    }
};
</script>

<style scoped>
.mo-sql {
    height: 100%;
}

.mo-sql__aside {
    display: flex;
    overflow: hidden;
    width: 50vw;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.mo-sql__main {
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #ecf5ff;
}

.mo-sql__result {
    flex: 1;
    height: 0;
}

.mo-sql__exec {
    padding-bottom: 5px;
}
</style>
