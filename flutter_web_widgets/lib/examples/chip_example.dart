import 'package:flutter/material.dart';

class ChipExample extends StatelessWidget {
  const ChipExample({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Chip(
        avatar: CircleAvatar(backgroundColor: Colors.blue, child: Text('A')),
        label: Text('Aaron Burr'),
      ),
    );
  }
}
