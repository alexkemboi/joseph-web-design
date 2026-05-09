CREATE DATABASE STPETERS;
DROP TABLE GRADES;
CREATE TABLE GRADES (
						ID INT IDENTITY(1,1) PRIMARY KEY,
						GRADE VARCHAR(50),
						REMARK VARCHAR(50),MARKSRANGE VARCHAR(50))


ALTER TABLE GRADES ADD  MARKSRANGE VARCHAR(50)
ALTER TABLE GRADES DROP COLUMN  MARKSRANGE 
SELECT * FROM GRADES

INSERT INTO GRADES 
    (GRADE,REMARK,MARKSRANGE) 
VALUES	  
    ('A',  'EXCELLENT',      '80-100'),
    ('B+', 'VERY GOOD',      '75-79'),
    ('B',  'GOOD',           '70-74'),
    ('B-', 'FAIRLY GOOD',    '65-69'),
    ('C+', 'ABOVE AVERAGE',  '60-64'),
    ('C',  'AVERAGE',        '55-59'),
    ('C-', 'BELOW AVERAGE',  '50-54'),
    ('D+', 'PASS',           '45-49'),
    ('D',  'WEAK PASS',      '40-44'),
    ('D-', 'POOR',           '35-39'),
    ('E',  'FAIL',           '0-34');

	2sYstemmaster!


	SELECT local_tcp_port
FROM sys.dm_exec_connections
WHERE session_id = @@SPID;