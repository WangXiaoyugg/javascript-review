### 键盘高级技巧

- 命令行编辑

1. 移动光标
ctrl + a  行首
ctrl + e 行尾
ctrl + f 右箭头
ctrl + b 左箭头
ctrl + l 清空屏幕

esc + b 向后移动一个单词 ／ linux alt + b
esc + f 向前移动一个单词  ／ linux alt +f

2. 修改文本
ctrl + d 删除光标所在字符
ctrl + t 光标位置的字符和光标前面的字符互换位置

esc + t 光标位置的字和其前面的字互换位置
esc + l 把从光标位置到字尾的字符转换成小写字母
esc + u 把从光标位置到字尾的字符转换成大写字母

3. 剪切和黏贴文本
ctrl + k
ctrl + u
ctrl + y

esc + d
esc + backspace

4. 自动补全
tab

esc/alt + ?
esc/alt + *


5. 搜索历史命令
history | less  只保存最近的500个命令
history | grep /usr/bin

88  ls -l /usr/bin > ls-output.txt
!88 => 执行  ls -l /usr/bin > ls-output.txt

ctrl + r 
ctrl + j
ctrl + c/g
ctrl + p
ctrl + n
ctrl + o /enter

!!	重复最后一次执行的命令。可能按下上箭头按键和 enter 键更容易些。
!number	重复历史列表中第 number 行的命令。
!string	重复最近历史列表中，以这个字符串开头的命令。
!?string	重复最近历史列表中，包含这个字符串的命令。

