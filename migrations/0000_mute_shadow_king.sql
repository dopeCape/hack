CREATE TABLE `medical_data` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` text,
	`age` integer NOT NULL,
	`gender` text NOT NULL,
	`ethnicity` text,
	`location` text,
	`heart_rate` integer,
	`blood_pressure` text,
	`respiratory_rate` integer,
	`temperature` real,
	`diet` text,
	`exercise` integer,
	`sleep_hours` integer,
	`smoking` integer,
	`alcohol` integer,
	`conditions` text,
	`medications` text,
	`pain_level` integer NOT NULL,
	`fatigue` integer NOT NULL,
	`other_symptoms` text,
	`blood_glucose` real,
	`cholesterol` real,
	`steps` integer,
	`sleep_quality` real,
	`calories_burned` real,
	`mood` text,
	`stress_level` integer NOT NULL,
	`genomic_data` text,
	`family_history` text,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`email` text
);
